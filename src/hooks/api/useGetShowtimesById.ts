import { useQuery } from '@tanstack/react-query'
import { objectToQueryString } from '../../utils'
import { quanLyRap } from '../../services'

type UseGetShowtimesByIdParams = {
    id:string
}

export const useGetShowtimesById = ({id}: UseGetShowtimesByIdParams) => {
    const query = useQuery({
        queryKey: ['Showtime', id],
        queryFn: ()=> quanLyRap.getShowTimesById(objectToQueryString({maPhim: id}))
    })
  return {
    ...query,
    data: query?.data?.data?.content
  }
  
}
