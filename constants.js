
export const USER_ROLES = {
    USER: "USER",
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


export const SALT_ROUDS =  10;