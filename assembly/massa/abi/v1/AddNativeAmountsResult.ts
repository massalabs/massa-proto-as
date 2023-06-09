// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class AddNativeAmountsResult {
  static encode(message: AddNativeAmountsResult, writer: Writer): void {
    const sum = message.sum;
    if (sum !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(sum, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AddNativeAmountsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AddNativeAmountsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sum = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sum: NativeAmount | null;

  constructor(sum: NativeAmount | null = null) {
    this.sum = sum;
  }
}

export function encodeAddNativeAmountsResult(
  message: AddNativeAmountsResult
): Uint8Array {
  return Protobuf.encode(message, AddNativeAmountsResult.encode);
}

export function decodeAddNativeAmountsResult(
  buffer: Uint8Array
): AddNativeAmountsResult {
  return Protobuf.decode<AddNativeAmountsResult>(
    buffer,
    AddNativeAmountsResult.decode
  );
}