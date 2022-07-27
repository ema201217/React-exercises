import { createContext } from 'React'
import { IPropsFeedbacks } from '../interfaces/IFeedbacks'

export const feedbackContext = createContext<IPropsFeedbacks | null>(null)