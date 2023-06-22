// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "..\\..\\model\\v1\\NativeAddress";

export class NativeAddressToStringRequest {
  static encode(message: NativeAddressToStringRequest, writer: Writer): void {
    const toConvert = message.toConvert;
    if (toConvert !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(toConvert, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeAddressToStringRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAddressToStringRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toConvert = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toConvert: NativeAddress | null;

  constructor(toConvert: NativeAddress | null = null) {
    this.toConvert = toConvert;
  }
}

export function encodeNativeAddressToStringRequest(
  message: NativeAddressToStringRequest
): Uint8Array {
  return Protobuf.encode(message, NativeAddressToStringRequest.encode);
}

export function decodeNativeAddressToStringRequest(
  buffer: Uint8Array
): NativeAddressToStringRequest {
  return Protobuf.decode<NativeAddressToStringRequest>(
    buffer,
    NativeAddressToStringRequest.decode
  );
}
