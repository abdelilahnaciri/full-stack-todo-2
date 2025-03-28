"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
  // ** Error Handling
};
export const createTodoAction = async ({
  title,
  body,
}: {
  title: string;
  body?: string | undefined;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
