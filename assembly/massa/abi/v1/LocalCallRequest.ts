// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class LocalCallRequest {
  static encode(message: LocalCallRequest, writer: Writer): void {
    const targetScAddress = message.targetScAddress;
    if (targetScAddress !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(targetScAddress, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.targetFunctionName);

    writer.uint32(26);
    writer.bytes(message.functionArg);
  }

  static decode(reader: Reader, length: i32): LocalCallRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LocalCallRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetScAddress = NativeAddress.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.targetFunctionName = reader.string();
          break;

        case 3:
          message.functionArg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  targetScAddress: NativeAddress | null;
  targetFunctionName: string;
  functionArg: Uint8Array;

  constructor(
    targetScAddress: NativeAddress | null = null,
    targetFunctionName: string = "",
    functionArg: Uint8Array = new Uint8Array(0)
  ) {
    this.targetScAddress = targetScAddress;
    this.targetFunctionName = targetFunctionName;
    this.functionArg = functionArg;
  }
}

export function encodeLocalCallRequest(message: LocalCallRequest): Uint8Array {
  return Protobuf.encode(message, LocalCallRequest.encode);
}

export function decodeLocalCallRequest(buffer: Uint8Array): LocalCallRequest {
  return Protobuf.decode<LocalCallRequest>(buffer, LocalCallRequest.decode);
}
