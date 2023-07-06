// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class GetCallCoinsResult {
  static encode(message: GetCallCoinsResult, writer: Writer): void {
    const coins = message.coins;
    if (coins !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(coins, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetCallCoinsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCallCoinsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  coins: NativeAmount | null;

  constructor(coins: NativeAmount | null = null) {
    this.coins = coins;
  }
}

export function encodeGetCallCoinsResult(
  message: GetCallCoinsResult
): Uint8Array {
  return Protobuf.encode(message, GetCallCoinsResult.encode);
}

export function decodeGetCallCoinsResult(
  buffer: Uint8Array
): GetCallCoinsResult {
  return Protobuf.decode<GetCallCoinsResult>(buffer, GetCallCoinsResult.decode);
}
