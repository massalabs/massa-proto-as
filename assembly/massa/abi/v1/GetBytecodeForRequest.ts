// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class GetBytecodeForRequest {
  static encode(message: GetBytecodeForRequest, writer: Writer): void {
    const address = message.address;
    if (address !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetBytecodeForRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBytecodeForRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: NativeAddress | null;

  constructor(address: NativeAddress | null = null) {
    this.address = address;
  }
}

export function encodeGetBytecodeForRequest(
  message: GetBytecodeForRequest
): Uint8Array {
  return Protobuf.encode(message, GetBytecodeForRequest.encode);
}

export function decodeGetBytecodeForRequest(
  buffer: Uint8Array
): GetBytecodeForRequest {
  return Protobuf.decode<GetBytecodeForRequest>(
    buffer,
    GetBytecodeForRequest.decode
  );
}
