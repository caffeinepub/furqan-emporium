import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ShopInfo {
    tagline: string;
    name: string;
    established: bigint;
    email: string;
    address: string;
    phone: string;
}
export interface ContactSubmission {
    name: string;
    message: string;
    phone: string;
}
export interface Product {
    name: string;
    note: string;
    unit: string;
    description: string;
    price: bigint;
}
export interface backendInterface {
    addProduct(name: string, description: string, price: bigint, unit: string, note: string): Promise<bigint>;
    getAllProducts(): Promise<Array<Product>>;
    getContactFormSubmissions(): Promise<Array<ContactSubmission>>;
    getShopInfo(): Promise<ShopInfo>;
    submitContactForm(name: string, phone: string, message: string): Promise<bigint>;
}
