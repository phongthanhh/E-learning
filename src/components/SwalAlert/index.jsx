import { USER_LOGIN } from 'constant'
import { useDispatch } from 'react-redux'
import { SIGN_OUT } from 'stores'
import Swal from 'sweetalert2'

export function SignOutSwal() {
  const dispatch = useDispatch()
  Swal.fire({
    title: 'Bạn có muốn đăng xuất?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Đăng xuất'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(USER_LOGIN)
      dispatch({ type: SIGN_OUT })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
