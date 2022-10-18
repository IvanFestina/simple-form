import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const applyForm = createAsyncThunk(
  'requestForm/applyForm',
  async ({ params }: any, thunkAPI) => {
    const secondsToWait = 2000;

    try {
      debugger;
      const res = await new Promise(resolve => {
        setTimeout(() => resolve(params), secondsToWait);
      });

      // eslint-disable-next-line no-console
      console.log(JSON.stringify(res));
    } catch (e) {
      debugger;
      // eslint-disable-next-line no-console
      console.log('Error', e);

      return thunkAPI.rejectWithValue(e);
    }
  },
);

const initialState = {
  cities: [
    {
      id: 'MOW',
      name: 'Москва',
    },
    {
      id: 'SPB',
      name: 'Санкт-Петербург',
    },
    {
      id: 'KZN',
      name: 'Казань',
    },
    {
      id: 'KDA',
      name: 'Краснодар',
    },
  ] as CitiesType[],
  sources: [
    'Инстаграм',
    'От друзей',
    'Реклама',
    'Поисковые системы',
    'Другое',
  ] as string[],
  appIsLoading: false as boolean,
};

export const RequestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(applyForm.pending, (state, action) => {
        state.appIsLoading = true;
      })
      .addCase(applyForm.fulfilled, (state, action) => {
        state.appIsLoading = false;
      })
      .addCase(applyForm.rejected, (state, action) => {
        state.appIsLoading = false;
      });
  },
});

// export const {} = RequestSlice.actions;

export default RequestSlice.reducer;
//
// // T Y P E S
type CitiesType = {
  id: string;
  name: string;
};
