// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class MulNativeAmountRequest {
  static encode(message: MulNativeAmountRequest, writer: Writer): void {
    const amount = message.amount;
    if (amount !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(amount, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int64(message.coefficient);
  }

  static decode(reader: Reader, length: i32): MulNativeAmountRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MulNativeAmountRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = NativeAmount.decode(reader, reader.uint32());
          break;

        case 2:
          message.coefficient = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  amount: NativeAmount | null;
  coefficient: i64;

  constructor(amount: NativeAmount | null = null, coefficient: i64 = 0) {
    this.amount = amount;
    this.coefficient = coefficient;
  }
}

export function encodeMulNativeAmountRequest(
  message: MulNativeAmountRequest
): Uint8Array {
  return Protobuf.encode(message, MulNativeAmountRequest.encode);
}

export function decodeMulNativeAmountRequest(
  buffer: Uint8Array
): MulNativeAmountRequest {
  return Protobuf.decode<MulNativeAmountRequest>(
    buffer,
    MulNativeAmountRequest.decode
  );
}
