import { createSlice } from '@reduxjs/toolkit'
const initialPhotos = [
    {
      id: 91176,
      categoryId: 5,
      photo: 'https://picsum.photos/id/532/300/300',
      title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
    },
    {
      id: 82605,
      categoryId: 1,
      photo: 'https://picsum.photos/id/43/300/300',
      title: 'Ad officia magna veniam sunt.'
    },
    
  ];
const photo = createSlice({
    name: 'photos',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
            // const newPhoto = action.payload;
            state.push(action.payload)
        },
        removePhoto: (state, action) => {
            const removePhoto = action.payload;
            state = state.filter(photo=> photo.id !== removePhoto);
            return state;
        },
        updatePhoto: (state,action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
            
            if(photoIndex >=0 ){
                state[photoIndex] = newPhoto;
            }
        }
    }
})

const { reducer, actions} = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;