import { createLazyFileRoute } from '@tanstack/react-router'
import Details from '../../screen/Details'

export const Route = createLazyFileRoute('/pizza/$id')({
  component: () => <Details />,
})
