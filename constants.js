
export const USER_ROLES = {
    USER: "CANDIDATE",
    RECRUITER: "RECRUITER",
    ADMIN: "ADMIN"
}

export const JOB_TYPES = {
    FULL_TIME : "full-time",
    PART_TIME : 'part-time',
    CONTRACT : 'contract',
    INTERSHIP : 'internship',
    REMOTE: "remote"
};

export const JOB_STATUS = {
    OPEN : 'open',
    CLOSE : 'close'
}

export const JOB_STATUS_LIST = Object.values(JOB_STATUS)

export const JOB_TYPE_LIST = Object.values(JOB_TYPES);

export const JOB_SALARY = {
    MAX_SALARY: 1000,
    MIN_SALARY: 1000
}

export const SALT_ROUDS =  10;

export const BASE_URL = '/api/v1'

export const AUTH_ERRORS = {
  EMAIL_EXISTS: {
    code: "EMAIL_EXISTS",
    message: "An account with this email already exists."
  },

  EMAIL_NOT_VERIFIED: {
    code: "EMAIL_NOT_VERIFIED",
    message: "Please verify your email before logging in."
  },

  INVALID_CREDENTIALS: {
    code: "INVALID_CREDENTIALS",
    message: "Invalid email or password."
  },

  USER_NOT_FOUND: {
    code: "USER_NOT_FOUND",
    message: "No account found with this email."
  },

  TOKEN_EXPIRED: {
    code: "TOKEN_EXPIRED",
    message: "Session expired. Please log in again."
  },

  NO_TOKEN: {
    code: "NO_TOKEN",
    message: "no auth token found."
  },

  UNAUTHORIZED: {
    code: "UNAUTHORIZED",
    message: "You are not authorized to perform this action."
  }
};