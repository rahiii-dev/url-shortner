import { Router } from "express";
import { container } from "../../../core/container";
import TYPES from "../../../core/container/container.types";
import { isAuthenticated } from "../../../core/token/user/userMiddleware";
import { ShortenerController } from "../../../module/shortener/shortner.controller";

const router = Router();
const shortenerController = container.get<ShortenerController>(TYPES.ShortenerController)

// baseurl: /api
router.post("/shorten", isAuthenticated, shortenerController.createShortUrl);
router.get("/my-short-urls", isAuthenticated, shortenerController.myShortUrls);
router.put("/:shortCode/activate", isAuthenticated, shortenerController.activateUrl);
router.put("/:shortCode/deactivate", isAuthenticated, shortenerController.deactivateUrl);

export const shortenerRoutes = router;