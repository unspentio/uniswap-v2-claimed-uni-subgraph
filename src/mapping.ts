import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, Claimed } from "../generated/Contract/Contract"
import { Claim } from "../generated/schema"

export function handleClaimed(event: Claimed): void {
  let claim = new Claim(event.transaction.hash.toHex());

  claim.amount = event.params.amount;
  claim.account = event.params.account;

  claim.save();
}
