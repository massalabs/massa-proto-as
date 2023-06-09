// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class CompareNativeAddressRequest {
  static encode(message: CompareNativeAddressRequest, writer: Writer): void {
    const left = message.left;
    if (left !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAddress.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompareNativeAddressRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeAddressRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = NativeAddress.decode(reader, reader.uint32());
          break;

        case 2:
          message.right = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: NativeAddress | null;
  right: NativeAddress | null;

  constructor(
    left: NativeAddress | null = null,
    right: NativeAddress | null = null
  ) {
    this.left = left;
    this.right = right;
  }
}

export function encodeCompareNativeAddressRequest(
  message: CompareNativeAddressRequest
): Uint8Array {
  return Protobuf.encode(message, CompareNativeAddressRequest.encode);
}

export function decodeCompareNativeAddressRequest(
  buffer: Uint8Array
): CompareNativeAddressRequest {
  return Protobuf.decode<CompareNativeAddressRequest>(
    buffer,
    CompareNativeAddressRequest.decode
  );
}
