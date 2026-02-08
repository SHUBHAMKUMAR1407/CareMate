import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48yQAAAc5JREFUWIXtt8tLQlEQxU/2KjCKzL62LgKuiqCgoI2ghaC1oIWgtaCFoEWgRStBSyOoTZtW7oOgTYuCFoMWgZFD8m0i+20d5r0mN/uAzZkz5/fvnDlz74A/+JGLf5QcAGmACqA1oy51wL87wTe7H6y2+gD8/DqOAkiXywsNcVzV0F+t19a9OQJ4eQiwK8uL8sT9vmxN3CeEvoB+OchYd4QG6APoA+gC6APoA+gC6APoA+gD6APoA+gD6AOMW4AtoB4Y87F3bBHCNiACzABzwDow20N/gQTwKcuL8sT9vixOnCf0BfTLYcbaz7kY+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gD6APoA+gDint8B3tWvIL18WVIAAAAASUVORK5CYII=' },
  address: { type: { line1: String, line2: String }, default: { line1: '', line2: '' } },
  gender: { type: String, default: 'Not Selected' },
  dob: { type: String, default: 'Not Selected' },
  phone: { type: String, default: '00000000000' },
  otp: { type: String, default: '' },
  otpExpire: { type: Number, default: 0 }
}, { minimize: false, timestamps: true })

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel