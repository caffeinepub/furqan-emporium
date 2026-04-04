import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission } from "../backend";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation<bigint, Error, ContactSubmission>({
    mutationFn: async ({ name, phone, message }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(name, phone, message);
    },
  });
}

export function useGetContactFormSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactFormSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
