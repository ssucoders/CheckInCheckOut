import Axios from "axios";

const EMPLOYEE_URL = "http://localhost:3010/api/employees";

export function fetchEmployees() {
    const request = Axios.get(EMPLOYEE_URL)
    return request;
}
