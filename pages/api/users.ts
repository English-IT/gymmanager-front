import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { http } from ".";

export const getUsers = async (queryParams) => {
  try {
    const allUsers = await http.get("/users");
    console.log("API Response:", allUsers); // Check the full response here
    return allUsers?.data?.users || []; // Return an empty array if `users` is undefined
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};

export const useUsers = (queryParams) => {
  return useQuery({
    queryKey: ["users", queryParams],
    queryFn: () => getUsers(queryParams),
  });
};

export const registerUser = async (newUser) => {
  return await http.post("/auth/register", {
    ...newUser,
  });
};

export const useRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (newUser) => registerUser(newUser),
    onSuccess: () => {
      message.success("New user added succesfully!");
      //   router.push("/login");
    },
    onError: (error) => {
      //   message.error(error);
      console.error(error);
    },
  });
};
