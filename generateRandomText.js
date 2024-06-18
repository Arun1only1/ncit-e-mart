import crypto from "crypto";

const generateRandomText = () => {
  const randomText = crypto.randomBytes(64).toString("hex");

  console.log(randomText);
};

generateRandomText();
