import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
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
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    email,
    phone,
    restaurantName,
    managerName,
  })
}
