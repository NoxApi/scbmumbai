import { BigInt } from "@graphprotocol/graph-ts"
import {
  scbmumbai,
  Approval,
  ApprovalForAll,
  Evole,
  Feed,
  Mint,
  NewLockChoice,
  OwnershipTransferred,
  Reclaim,
  RewardPaid,
  Transfer,
  UpdateLockChoice
} from "../generated/scbmumbai/scbmumbai"
import { user,token,foodlist } from "../generated/schema"

export function handleFeed(event: Feed): void {
  // let entity = food.load(event.params.tokenId.toString())
  // if (entity== null) {
  //   entity = new food(event.params.tokenId.toString())
  // }
  // let foods = new foodlist(event.params.unlockTime.toString())
  // foods.amount = event.params.amount
  // foods.TokenID = event.params.tokenId
  // foods.isclaim = false
}
export function handleReclaim(event: Reclaim): void {
  // let ID = token.load(event.params.tokenId.toString())
  // ID?.Foodlist?.at(event.params.unlockTime.toString)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleEvole(event: Evole): void {}

export function handleMint(event: Mint): void {
  let entity = user.load(event.params.user)
  if (entity== null) {
    entity = new user(event.params.user)
  }
  let ID = new token(event.params.tokenId.toString())
  ID.evolform = new BigInt(0)
  ID.race = new BigInt(0)
  ID.amount =new BigInt(0)
  ID.User=entity.id
  let tokenid = entity.token
  tokenid.push(ID.id)
  entity.save()
  ID.save()
}

export function handleNewLockChoice(event: NewLockChoice): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}


export function handleRewardPaid(event: RewardPaid): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateLockChoice(event: UpdateLockChoice): void {}
