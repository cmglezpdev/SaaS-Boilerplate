export interface PaymentDetails {
  title: string
  description: string
  price: {
    monthly: {
      value: number
      buy_url: string
      price_id: string
    }
    yearly: {
      value: number
      buy_url: string
      price_id: string
    }
  },
  featured?: boolean,
  features: {
    text: string;
    included: boolean
  }[]
}
