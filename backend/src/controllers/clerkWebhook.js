import User from "../models/user.model.js";
import { Webhook } from "svix";

export const config = {
  api: {
    bodyParser: false,
  },
};

const getRawBody = (req) => {
  return new Promise((resolve, reject) => {
    let data = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      resolve(data);
    });
    req.on("error", reject);
  });
};

const clerkWebhooks = async (req, res) => {
  try {
    console.log("🔥 CLERK WEBHOOK HIT");
    console.log("Headers:", req.headers);

    const rawBody = await getRawBody(req);
    console.log("Raw body length:", rawBody.length);

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const evt = whook.verify(rawBody, headers);
    const { data, type } = evt;

    console.log("Event type:", type);

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      fullname: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url || "https://avatar.vercel.sh/default",
    };

    console.log("📦 User Data:", userData);

    if (type === "user.created") {
      const user = await User.create(userData);
      console.log("✅ User created:", user._id);
    }

    if (type === "user.updated") {
      await User.findByIdAndUpdate(data.id, userData);
      console.log("✅ User updated");
    }

    if (type === "user.deleted") {
      await User.findByIdAndDelete(data.id);
      console.log("✅ User deleted");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ WEBHOOK ERROR:", error.message);
    console.error("Full error:", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export default clerkWebhooks;
