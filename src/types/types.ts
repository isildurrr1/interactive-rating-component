export interface RatingProps {
  rating: number | null
  onButtonClick: Function
  onSubmitClick: Function
}

export interface RatingButtonProps {
  rating: number | null
  ratingNumber: number
  onClickFunc: Function
}

export interface ReactionProps {
  rating: number | null
}