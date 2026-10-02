// Crops, scales and packs the kiswah photographs into the explorer's texture files.
// Usage: swift process.swift <input dir> <output dir>
import CoreImage
import Foundation

let args = CommandLine.arguments
let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2])
let context = CIContext(options: [.workingColorSpace: CGColorSpace(name: CGColorSpace.sRGB)!])
let sRGB = CGColorSpace(name: CGColorSpace.sRGB)!

func load(_ name: String) -> CIImage {
  guard let image = CIImage(contentsOf: input.appendingPathComponent(name)) else { fatalError("cannot read \(name)") }
  return image
}

/// Crops a rectangle given in top-left pixel coordinates, then scales it to exactly w × h.
func cropScale(_ image: CIImage, x: CGFloat, top: CGFloat, width: CGFloat, height: CGFloat, to w: CGFloat, _ h: CGFloat) -> CIImage {
  let full = image.extent.height
  let rect = CGRect(x: x, y: full - top - height, width: width, height: height)
  let cropped = image.cropped(to: rect).transformed(by: CGAffineTransform(translationX: -rect.minX, y: -rect.minY))
  return cropped.transformed(by: CGAffineTransform(scaleX: w / width, y: h / height))
    .cropped(to: CGRect(x: 0, y: 0, width: w, height: h))
}

func write(_ image: CIImage, _ name: String, quality: CGFloat) {
  let url = output.appendingPathComponent(name)
  try! context.writeJPEGRepresentation(
    of: image, to: url, colorSpace: sRGB,
    options: [kCGImageDestinationLossyCompressionQuality as CIImageRepresentationOption: quality])
  print("wrote \(name) \(Int(image.extent.width))x\(Int(image.extent.height))")
}

// The door curtain (sitara): CC0 photograph, cropped to the curtain.
let sitara = cropScale(load("kiswah-2016-door.jpg"), x: 40, top: 0, width: 1203, height: 2348, to: 768, 1500)
write(sitara, "sitara.jpg", quality: 0.97)

// The belt (hizam): three panels, one per row of an atlas, each row 1536 × 248 with black gaps.
let rowW: CGFloat = 1536
let rowH: CGFloat = 248
let gap: CGFloat = 8
let atlasH = rowH * 3 + gap * 2
let panels: [CIImage] = [
  // Row 0: Khalili Collection TXT 0039a (gold).
  cropScale(load("khalili-txt-0039a.jpg"), x: 56, top: 40, width: 1816, height: 326, to: rowW, rowH),
  // Row 1: Khalili Collection TXT 0251pan (silver).
  cropScale(load("khalili-txt-0251pan.jpg"), x: 0, top: 19, width: 1920, height: 274, to: rowW, rowH),
  // Row 2: the modern belt's dedication panel (CC0).
  cropScale(load("kiswah-2016-dedication.jpg"), x: 0, top: 0, width: 1873, height: 316, to: rowW, rowH),
]
var atlas = CIImage(color: CIColor(red: 0.04, green: 0.04, blue: 0.045)).cropped(to: CGRect(x: 0, y: 0, width: rowW, height: atlasH))
for (row, panel) in panels.enumerated() {
  // Row 0 at the top of the image (CoreImage's origin is bottom-left).
  let y = atlasH - CGFloat(row + 1) * rowH - CGFloat(row) * gap
  atlas = panel.transformed(by: CGAffineTransform(translationX: 0, y: y)).composited(over: atlas)
}
write(atlas, "hizam-atlas.jpg", quality: 0.97)
