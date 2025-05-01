import { body, validationResult } from "express-validator";
import HTTPStatus from "../enum/HTTPStatus.js";

export const DonerValidationRegistration = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("contactNo")
    .trim()
    .notEmpty()
    .withMessage("Contact number is required")
    .isLength({ min: 10 })
    .withMessage("Contact number must be at least 10 characters long")
    .isNumeric()
    .withMessage("Contact number must be numeric"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 2 })
    .withMessage("Username must be at least 2 characters long"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
export const OCValidationRegistration = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("contactNo")
    .trim()
    .notEmpty()
    .withMessage("Contact number is required")
    .isLength({ min: 10 })
    .withMessage("Contact number must be at least 10 characters long")
    .isNumeric()
    .withMessage("Contact number must be numeric"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 2 })
    .withMessage("Username must be at least 2 characters long"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
export const AdminValidationRegistration = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 2 })
    .withMessage("Username must be at least 2 characters long"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
export const EventRegister = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 20 })
    .withMessage("Password must be at least 20 characters long"),

  body("target").trim().notEmpty().withMessage("Target is required"),
  body("endDate").trim().notEmpty().withMessage("Add End Date"),
];
export const validateLogin = [
  body("username").trim().notEmpty().withMessage("Please provide Username"),

  body("password").trim().notEmpty().withMessage("Please provide password"),
];
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(HTTPStatus.BAD_REQUEST).json({ errors: errors.array() });
  }
  next();
};
