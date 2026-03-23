import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission, Product, ShopInfo } from "../backend";
import { useActor } from "./useActor";

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetShopInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<ShopInfo>({
    queryKey: ["shopInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Pt. Shivlal Ustad - Sweets & Bakery",
          tagline: "Pure Desi Ghee Preparation (Since 1908)",
          established: BigInt(1908),
          email: "shivlalustad@gmail.com",
          address: "Binda Wala Chowk, Khurja-203131 (U.P.)",
          phone: "+91-9756605864",
        };
      }
      return actor.getShopInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation<bigint, Error, ContactSubmission>({
    mutationFn: async ({ name, phone, message }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(name, phone, message);
    },
  });
}
