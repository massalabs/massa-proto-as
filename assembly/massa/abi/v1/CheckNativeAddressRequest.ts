// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class CheckNativeAddressRequest {
  static encode(message: CheckNativeAddressRequest, writer: Writer): void {
    const toCheck = message.toCheck;
    if (toCheck !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(toCheck, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckNativeAddressRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckNativeAddressRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toCheck = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toCheck: NativeAddress | null;

  constructor(toCheck: NativeAddress | null = null) {
    this.toCheck = toCheck;
  }
}

export function encodeCheckNativeAddressRequest(
  message: CheckNativeAddressRequest
): Uint8Array {
  return Protobuf.encode(message, CheckNativeAddressRequest.encode);
}

export function decodeCheckNativeAddressRequest(
  buffer: Uint8Array
): CheckNativeAddressRequest {
  return Protobuf.decode<CheckNativeAddressRequest>(
    buffer,
    CheckNativeAddressRequest.decode
  );
}
