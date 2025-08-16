import dotenv from 'dotenv';
dotenv.config();

const credentials = {
    standardUser: process.env.STANDARD_USER as string,
    locked_out_user: process.env.LOCKED_OUT_USER as string,
    problem_user: process.env.PROBLEM_USER as string,
    performance_glitch_user: process.env.PERFORMANCE_GLITCH_USER as string,
    error_user: process.env.ERROR_USER as string,
    visual_user: process.env.VISUAL_USER as string,
    password: process.env.PASSWORD as string
}

export default credentials;