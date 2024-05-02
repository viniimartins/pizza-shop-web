import { api } from '@/lib/axios'

export interface ResgisterResturantBody {
  restaurantName: string
  phone: string
  managerName: string
  email: string
}

export async function registerRestaurant({
  email,
  phone,
  managerName,
  restaurantName,
}: ResgisterResturantBody) {
  await api.post('/restaurants', {
    email,
    phone,
    restaurantName,
    managerName,
  })
}
