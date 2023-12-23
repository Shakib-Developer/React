export default async function fetchProducts() {
    const res = await fetch("https://cart-api.teamrabbil.com/api/product-list");
    const data = await res.json();

    return data.data;
}

// User Email Api Start =======================

export async function userLogin(email) {
    const res = await fetch("https://cart-api.teamrabbil.com/api/user-login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            UserEmail: email,
        }),
    });
    const data = await res.json();

    return data;
}

// OTP Api Start =======================

export async function verifyLogin(email, pin) {
    const res = await fetch(
        "https://cart-api.teamrabbil.com/api/verify-login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                UserEmail: email,
                OTP: pin,
            }),
        }
    );
    const data = await res.json();

    return data;
}

// Create Cart Api Start =======================

export async function createCart(productId) {
    const res = await fetch(
        `https://cart-api.teamrabbil.com/api/create-cart/${productId}`,
        {
            method: "GET",
            headers: {
                token: localStorage.getItem("token"),
            },
        }
    );
    const data = await res.json();

    return data;
}

// Cart List Api Start =======================

export async function fetchCartList() {
    const res = await fetch("https://cart-api.teamrabbil.com/api/cart-list", {
        method: "GET",
        headers: {
            token: localStorage.getItem("token"),
        },
    });
    const data = await res.json();

    return data;
}

// Remove Cart Start =======================

export async function removeCart(productId) {
    const res = await fetch(
        `https://cart-api.teamrabbil.com/api/remove-cart/${productId}`,
        {
            method: "GET",
            headers: {
                token: localStorage.getItem("token"),
            },
        }
    );
    const data = await res.json();

    return data;
}

