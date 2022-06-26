import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Modal from "react-modal"

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState)
    return (
        <div>
            {open && (
                <Modal
                    isOpen={open}
                    onRequestClose={() => setOpen(false)}
                >
                    <h1>Modal</h1>
                </Modal>
            )}
        </div>
    )
}
