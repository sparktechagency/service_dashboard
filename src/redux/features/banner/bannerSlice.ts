import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TIniatlState = {
  BannerCreateError: string,
  BannerUpdateError: string,
}


const initialState: TIniatlState = {
  BannerCreateError: "",
  BannerUpdateError: "",
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    SetBannerCreateError: (state, action: PayloadAction<string>) => {
      state.BannerCreateError = action.payload;
    },
    SetBannerUpdateError: (state, action: PayloadAction<string>) => {
      state.BannerUpdateError = action.payload;
    },
  },
});

export const {
  SetBannerCreateError,
  SetBannerUpdateError,
} = bannerSlice.actions;

const bannerSliceReducer = bannerSlice.reducer;
export default bannerSliceReducer;
