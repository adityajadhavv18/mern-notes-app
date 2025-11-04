import { Request, Response } from "express";
import * as healthService from "../services/health.services";

export const getHealth = async (_req: Request, res: Response) => {
  try {
    const data = await healthService.getHealthInfo();
    res.json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
