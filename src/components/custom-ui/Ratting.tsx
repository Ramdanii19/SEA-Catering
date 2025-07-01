// components/StarRating.tsx
import { FaStar } from 'react-icons/fa'

interface StarRatingProps {
  rating: number
}

const Rating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={18}
          className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default Rating
