// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class CompareNativeAmountRequest {
  static encode(message: CompareNativeAmountRequest, writer: Writer): void {
    const left = message.left;
    if (left !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAmount.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativeAmountRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeAmountRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = NativeAmount.decode(reader, reader.uint32());
          break;

        case 2:
          message.right = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: NativeAmount | null;
  right: NativeAmount | null;

  constructor(
    left: NativeAmount | null = null,
    right: NativeAmount | null = null
  ) {
    this.left = left;
    this.right = right;
  }
}

export function encodeCompareNativeAmountRequest(
  message: CompareNativeAmountRequest
): Uint8Array {
  return Protobuf.encode(message, CompareNativeAmountRequest.encode);
}

export function decodeCompareNativeAmountRequest(
  buffer: Uint8Array
): CompareNativeAmountRequest {
  return Protobuf.decode<CompareNativeAmountRequest>(
    buffer,
    CompareNativeAmountRequest.decode
  );
}
