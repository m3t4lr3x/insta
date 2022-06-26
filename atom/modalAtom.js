import { atom } from 'recoil'

export const modalState = atom ({
    key: 'modalState',
    default: false,
    // set false => modal close for first time
})