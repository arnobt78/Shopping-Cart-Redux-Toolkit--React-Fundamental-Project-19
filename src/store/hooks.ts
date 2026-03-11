import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Typed wrappers prevent repetitive type annotations in components.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
