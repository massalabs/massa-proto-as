// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class NativeAmountFromStringResult {
  static encode(message: NativeAmountFromStringResult, writer: Writer): void {
    const convertedAmount = message.convertedAmount;
    if (convertedAmount !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(convertedAmount, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeAmountFromStringResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAmountFromStringResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convertedAmount = NativeAmount.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  convertedAmount: NativeAmount | null;

  constructor(convertedAmount: NativeAmount | null = null) {
    this.convertedAmount = convertedAmount;
  }
}

export function encodeNativeAmountFromStringResult(
  message: NativeAmountFromStringResult
): Uint8Array {
  return Protobuf.encode(message, NativeAmountFromStringResult.encode);
}

export function decodeNativeAmountFromStringResult(
  buffer: Uint8Array
): NativeAmountFromStringResult {
  return Protobuf.decode<NativeAmountFromStringResult>(
    buffer,
    NativeAmountFromStringResult.decode
  );
}