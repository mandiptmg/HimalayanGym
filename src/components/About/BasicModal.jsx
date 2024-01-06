import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useGlobalContext } from '../../context/context'
const BasicModal = () => {
  const {isOpen, setIsOpen} = useGlobalContext()
  const handleClose = () => setIsOpen(false)
  return (
    <div>
      <Modal
        open={isOpen}
        className='h-screen w-full grid place-items-center'
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='md:w-[80%] w-screen  max-w-full max-h-full h-[50vh] sm:h-[70vh]'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/24fdcMw0Bj0?si=u01_LHww8eiFlJ3C&autoplay=1'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
