const API_URL = "http://127.0.0.1:8000";

/**
 * Login User
 */
export async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Login failed");
    }

    return data;
}

/**
 * Save JWT Token
 */
export function saveToken(token) {
    localStorage.setItem("access_token", token);
}

/**
 * Get JWT Token
 */
export function getToken() {
    return localStorage.getItem("access_token");
}

/**
 * Save Logged-in User
 */
export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

/**
 * Get Logged-in User
 */
export function getUser() {
    const user = localStorage.getItem("user");

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}

/**
 * Logout User
 */
export function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
}

/**
 * Check Login Status
 */
export function isAuthenticated() {
    return !!localStorage.getItem("access_token");
}

/**
 * Get User Role
 */
export function getUserRole() {
    const user = getUser();

    return user ? user.role : null;
}