// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CompareAddressRequest {
  static encode(message: CompareAddressRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.left);

    writer.uint32(18);
    writer.string(message.right);
  }

  static decode(reader: Reader, length: i32): CompareAddressRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareAddressRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = reader.string();
          break;

        case 2:
          message.right = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  left: string;
  right: string;

  constructor(left: string = "", right: string = "") {
    this.left = left;
    this.right = right;
  }
}

export function encodeCompareAddressRequest(
  message: CompareAddressRequest
): Uint8Array {
  return Protobuf.encode(message, CompareAddressRequest.encode);
}

export function decodeCompareAddressRequest(
  buffer: Uint8Array
): CompareAddressRequest {
  return Protobuf.decode<CompareAddressRequest>(
    buffer,
    CompareAddressRequest.decode
  );
}
