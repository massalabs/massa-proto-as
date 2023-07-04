// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class GetBalanceResult {
  static encode(message: GetBalanceResult, writer: Writer): void {
    const balance = message.balance;
    if (balance !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(balance, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetBalanceResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBalanceResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  balance: NativeAmount | null;

  constructor(balance: NativeAmount | null = null) {
    this.balance = balance;
  }
}

export function encodeGetBalanceResult(message: GetBalanceResult): Uint8Array {
  return Protobuf.encode(message, GetBalanceResult.encode);
}

export function decodeGetBalanceResult(buffer: Uint8Array): GetBalanceResult {
  return Protobuf.decode<GetBalanceResult>(buffer, GetBalanceResult.decode);
}
