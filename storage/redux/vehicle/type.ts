export interface VehicleState {
  vehicles: Vehicle[];
  vehicleId: string;
}

export interface Vehicle {
  brand: string;
  model: string;
  modelYear: string;
  price: number;
  description: string;
  categoryId: string;
  id: string;
  creadtedDate: string;
}
