import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { http } from ".";

interface RegisterUserPayload {
  role: string;
  name: string;
  phone: string;
  email: string;
  password: string;
}

export const getUsers = async (queryParams?: any) => {
  try {
    const response = await http.get("/users", {
      params: queryParams,
    });
    return response.data || [];
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users");
  }
};

export const useUsers = (queryParams?: any) => {
  return useQuery({
    queryKey: ["users", queryParams],
    queryFn: () => getUsers(queryParams),
  });
};

export const registerUser = async (newUser: RegisterUserPayload) => {
  try {
    const response = await http.post("/auth/register", newUser);
    return response.data;
  } catch (err) {
    throw new Error("Failed to register user");
  }
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newUser: RegisterUserPayload) => registerUser(newUser),
    onSuccess: () => {
      message.success("New user added successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      message.error("Failed to create user.");
    },
  });
};
