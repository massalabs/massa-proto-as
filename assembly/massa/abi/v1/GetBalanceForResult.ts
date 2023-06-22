// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class GetBalanceForResult {
  static encode(message: GetBalanceForResult, writer: Writer): void {
    const balance = message.balance;
    if (balance !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(balance, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetBalanceForResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBalanceForResult();

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

export function encodeGetBalanceForResult(
  message: GetBalanceForResult
): Uint8Array {
  return Protobuf.encode(message, GetBalanceForResult.encode);
}

export function decodeGetBalanceForResult(
  buffer: Uint8Array
): GetBalanceForResult {
  return Protobuf.decode<GetBalanceForResult>(
    buffer,
    GetBalanceForResult.decode
  );
}
