import { Router } from "express";
import { container } from "../../../core/container";
import TYPES from "../../../core/container/container.types";
import { ShortenerController } from "../../../module/shortener/shortner.controller";

const router = Router();
const shortenerController = container.get<ShortenerController>(TYPES.ShortenerController)

router.get("/:shortCode", shortenerController.redirectToOriginal);

export const redirectRoutes = router;